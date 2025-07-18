import { Lightbulb } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Lightbulb className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight">
        LedPod
      </span>
    </div>
  );
}
