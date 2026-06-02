<?php

namespace App\Http\Middleware;

use App\Models\InfoSession;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InfoSessionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {

        $format = in_array($request->format, ['long', 'short'], true) ? $request->format : 'long';

        $exist = InfoSession::where('formation', ucfirst((string) $request->type))
            ->where('format', $format)
            ->where('isAvailable', 1)
            ->first();

        if ($exist) {
            return $next($request);
        }


        return redirect("/error");
    }
}
