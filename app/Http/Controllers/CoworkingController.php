<?php

namespace App\Http\Controllers;

use App\Models\Coworking;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CoworkingController extends Controller
{
    public function index()
    {
        $coworkings = Coworking::all();
        return Inertia::render("admin/coworking/index", [
            "coworkings" => $coworkings
        ]);
    }


    public function show(Coworking $coworking)
    {
        return Inertia::render("admin/coworking/[id]", [
            "coworking" => $coworking
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'birthday' => 'required|string|max:255',
            'formation' => 'required|string',
            'proj_name' => 'required|string',
            'proj_desc' => 'required|string',
            'proj_plan' => 'required|string',
            'prev_proj' => 'nullable|string',
            'domain' => 'required',
            'reasons' => 'required|string',
            'otherDomain' => 'nullable|string',
            'otherDomains' => 'nullable|string',
            'otherReasons' => 'nullable|string',
            'otherReason' => 'nullable|string|required_if:reasons,other',
            'needs' => 'nullable|string',
            'otherNeeds' => 'nullable|string',
            'gender' => 'required|string|max:50',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'presentation' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $cv = $request->file('cv')->store('uploads', 'public');
        $presentation = $request->file('presentation')->store('uploads', 'public');

        $domainInput = Arr::wrap($request->input('domain'));
        $domainValues = array_filter($domainInput, fn ($value) => !is_null($value) && $value !== '' && $value !== 'other');
        $domain = implode(', ', $domainValues);
        $otherDomain = $request->input('otherDomain') ?? $request->input('otherDomains');
        if ($otherDomain) {
            $domain = trim($domain . ($domain ? ', ' : '') . $otherDomain);
        }

        $reasons = $request->input('reasons');
        if ($reasons === 'other') {
            $reasons = $request->input('otherReason') ?? $request->input('otherReasons');
        }

        $needs = $request->input('needs');
        if ($needs === 'other') {
            $needs = $request->input('otherNeeds');
        }

        Coworking::create([
            'full_name' => $validated['full_name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'birthday' => $validated['birthday'],
            'formation' => $validated['formation'],
            'cv' => $cv,
            'proj_name' => $validated['proj_name'],
            'proj_description' => $validated['proj_desc'],
            'domain' => $domain,
            'plan' => $validated['proj_plan'],
            'presentation' => $presentation,
            'prev_proj' => $validated['prev_proj'] ?? null,
            'reasons' => $reasons,
            'needs' => $needs,
            'gender' => $validated['gender'],
        ]);

        return back()->with('success', __('Thank you! We received your coworking application.'));
    }



    public function update(Request $request, Coworking $coworking)
    {

        $status = $request->status;

        if ($status == 'approve') {
            $coworking->update([
                "status" => "1"
            ]);
            // TODO: Mailer ?
            // Mail::to($coworking->email)->send(new CoworkingActionMailer($coworking->full_name));

        } else {
            $coworking->update([
                "status" => "2"
            ]);
        }
        return back();
    }

    public function destroy(Coworking $coworking)
    {
        $coworking->delete();
        return to_route("coworking.index");
    }

    public function clientIndex()
    {
        return Inertia::render('client/coworking/coworking');
    }

    public function clientForm()
    {
        return Inertia::render('client/coworking/coworkingForm');
    }
}
