<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Illuminate\Support\Collection;

class EventBookingsExport implements FromCollection, WithHeadings, WithMapping, WithCustomCsvSettings
{
    protected $bookings;

    public function __construct(Collection $bookings)
    {
        $this->bookings = $bookings;
    }

    /**
     * @return Collection
     */
    public function collection()
    {
        return $this->bookings;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Id',
            'Name',
            'Email',
            'Phone',
            'Gender',
            'Project Maturity',
            'Sector of Activities',
            'Booked Date',
            'Booked Time',
        ];
    }

    /**
     * Replace accented characters with non-accented equivalents
     */
    private function removeAccents($string)
    {
        if (empty($string)) {
            return '';
        }

        $accents = [
            'é' => 'e', 'É' => 'E',
            'è' => 'e', 'È' => 'E',
            'ê' => 'e', 'Ê' => 'E',
            'ë' => 'e', 'Ë' => 'E',
            'à' => 'a', 'À' => 'A',
            'â' => 'a', 'Â' => 'A',
            'ä' => 'a', 'Ä' => 'A',
            'ù' => 'u', 'Ù' => 'U',
            'û' => 'u', 'Û' => 'U',
            'ü' => 'u', 'Ü' => 'U',
            'ô' => 'o', 'Ô' => 'O',
            'ö' => 'o', 'Ö' => 'O',
            'î' => 'i', 'Î' => 'I',
            'ï' => 'i', 'Ï' => 'I',
            'ç' => 'c', 'Ç' => 'C',
        ];

        return strtr($string, $accents);
    }

    /**
     * @param mixed $booking
     * @return array
     */
    public function map($booking): array
    {
        static $index = 0;
        $index++;

        $createdAt = $booking->created_at ? \Carbon\Carbon::parse($booking->created_at) : null;

        return [
            $index,
            $booking->name ?? '',
            $booking->email ?? '',
            $booking->phone ?? '',
            ucfirst($booking->gender ?? ''),
            $this->removeAccents($booking->maturite_project ?? ''),
            $this->removeAccents($booking->secteur_dactivite ?? ''),
            $createdAt ? $createdAt->format('Y-m-d') : '',
            $createdAt ? $createdAt->format('H:i:s') : '',
        ];
    }

    /**
     * Configure CSV settings for proper UTF-8 and semicolon delimiter
     */
    public function getCsvSettings(): array
    {
        return [
            'delimiter' => ';',
            'enclosure' => '"',
            'escape_character' => '"',
            'line_ending' => "\r\n",
            'use_bom' => true, 
            'include_separator_line' => false,
            'excel_compatibility' => true,
        ];
    }
}

