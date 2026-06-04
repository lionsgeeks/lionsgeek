<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            if (!Schema::hasColumn('participants', 'formation_field')) {
                $table->string('formation_field')->nullable()->after('info_session_id');
            }
            if (!Schema::hasColumn('participants', 'region')) {
                $table->string('region')->nullable()->after('city');
            }
            if (!Schema::hasColumn('participants', 'other_city')) {
                $table->string('other_city')->nullable()->after('region');
            }
            if (!Schema::hasColumn('participants', 'status')) {
                $table->string('status')->default('pending')->after('code');
            }
        });
    }

    public function down(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            foreach (['formation_field', 'region', 'other_city', 'status'] as $column) {
                if (Schema::hasColumn('participants', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
