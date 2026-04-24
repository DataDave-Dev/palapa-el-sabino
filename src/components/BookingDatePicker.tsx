import { useState, useEffect } from "react";
import { Calendar } from "./ui/Calendar";
import { format, isBefore, differenceInDays, addDays } from "date-fns";
import { es } from "date-fns/locale";
import type { DateRange } from "react-day-picker";

export default function BookingDatePicker() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [occupiedDates, setOccupiedDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch occupied dates
  useEffect(() => {
    async function fetchOccupiedDates() {
      try {
        const response = await fetch("/api/bookings/available");
        const data = await response.json();

        if (data.occupiedDates) {
          const dates = data.occupiedDates.map((dateStr: string) => new Date(dateStr));
          setOccupiedDates(dates);
        }
      } catch (error) {
        console.error("Error fetching occupied dates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOccupiedDates();
  }, []);

  // Dispatch custom event when dates change
  useEffect(() => {
    const event = new CustomEvent("datesChanged", {
      detail: {
        startDate: range?.from ? range.from.toISOString().split('T')[0] : null,
        endDate: range?.to ? range.to.toISOString().split('T')[0] : null,
      },
    });
    window.dispatchEvent(event);
  }, [range]);

  // Check if a date is occupied
  const isDateOccupied = (date: Date) => {
    return occupiedDates.some(
      (occupiedDate) =>
        occupiedDate.toISOString().split("T")[0] === date.toISOString().split("T")[0]
    );
  };

  // Matcher for disabled dates
  const disabledDays = (date: Date) => {
    // Can't be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isBefore(date, today)) return true;

    // Can't be occupied
    if (isDateOccupied(date)) return true;

    return false;
  };

  // Calculate number of nights
  const nights = range?.from && range?.to
    ? differenceInDays(range.to, range.from)
    : 0;

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="h-80 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-night mb-2">Selecciona tus Fechas</h3>
          <p className="text-sm text-night/60">
            Haz clic en la fecha de entrada y luego en la fecha de salida
          </p>
        </div>

        <div className="flex justify-center">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            disabled={disabledDays}
            locale={es}
            numberOfMonths={2}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Selected Range Summary */}
      {range?.from && range?.to && (
        <div className="bg-gradient-to-r from-black/5 to-black/10 rounded-2xl p-6 border-2 border-black/20">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-night">
              {nights} {nights === 1 ? 'noche' : 'noches'}
            </p>
            <p className="text-sm text-night/60 mt-1">Duración de tu estadía</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-xs text-night/60 mb-1">Entrada</p>
              <p className="font-bold text-night">
                {format(range.from, "EEE d MMM", { locale: es })}
              </p>
              <p className="text-xs text-night/60 mt-1">A partir de las 4:00 PM</p>
            </div>
            <div className="text-center p-3 bg-white/50 rounded-lg">
              <p className="text-xs text-night/60 mb-1">Salida</p>
              <p className="font-bold text-night">
                {format(range.to, "EEE d MMM", { locale: es })}
              </p>
              <p className="text-xs text-night/60 mt-1">Hasta las 2:00 PM</p>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <p className="text-sm font-semibold text-night mb-3">Leyenda</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black rounded"></div>
            <span className="text-night/70">Seleccionado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 rounded"></div>
            <span className="text-night/70">En el rango</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border border-gray-300 rounded relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">✕</div>
            </div>
            <span className="text-night/70">No disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
}
