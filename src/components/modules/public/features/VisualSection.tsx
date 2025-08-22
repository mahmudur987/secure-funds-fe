import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, User, Banknote, ArrowRightLeft } from "lucide-react";

export default function VisualSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            See How Money Flows
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            A simple, secure journey: top-up, send, and cash-out — all from one
            app.
          </p>
        </div>

        {/* Visual */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Flow Diagram */}
          <Card className="shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border">
                {/* User sender */}
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sender
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      User A
                    </p>
                  </div>
                </div>

                {/* Agent */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center">
                    <Banknote className="h-7 w-7 text-emerald-600" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Agent
                  </p>
                </div>

                {/* User receiver */}
                <div className="absolute right-6 bottom-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-indigo-600/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receiver
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      User B
                    </p>
                  </div>
                </div>

                {/* Animated arrows */}
                <AnimatedArrow
                  from={{ x: 90, y: 60 }}
                  to={{ x: 50, y: 50 }}
                  label="Cash-In / Add"
                />
                <AnimatedArrow
                  from={{ x: 50, y: 50 }}
                  to={{ x: 86, y: 82 }}
                  label="Send / Cash-Out"
                  delay={800}
                />
              </div>
            </CardContent>
          </Card>

          {/* Right: Phone Mock & Bullets */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Smartphone className="h-7 w-7 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                All on your phone — fast & secure
              </h3>
            </div>

            <ul className="space-y-3">
              <Bullet text="Top-up via bank or agent, instantly reflected in your wallet." />
              <Bullet text="Send money to any registered user in seconds." />
              <Bullet text="Agents earn commission on cash-in and cash-out operations." />
              <Bullet text="Transparent fees, real-time balance, and full history." />
            </ul>

            <Card className="rounded-2xl border-dashed">
              <CardContent className="p-5 flex items-center gap-3">
                <ArrowRightLeft className="h-5 w-5 text-purple-600" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The platform securely applies{" "}
                  <span className="font-medium">fees</span> and credits agent{" "}
                  <span className="font-medium">commission</span> automatically
                  per transaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Helpers --- */

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </li>
  );
}

function AnimatedArrow({
  from,
  to,
  label,
  delay = 0,
}: {
  from: { x: number; y: number }; // percentages inside container
  to: { x: number; y: number }; // percentages inside container
  label?: string;
  delay?: number;
}) {
  // Convert percentages to absolute via CSS positioning
  const id = Math.random().toString(36).slice(2);

  return (
    <>
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          {/* Gradient stroke */}
          <linearGradient id={`grad-${id}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgb(37,99,235)" />
            <stop offset="100%" stopColor="rgb(147,51,234)" />
          </linearGradient>
          {/* Animated dash */}
          <style>
            {`
            @keyframes dash-${id} {
              0% { stroke-dashoffset: 60; }
              100% { stroke-dashoffset: 0; }
            }
          `}
          </style>
        </defs>

        <line
          x1={`${from.x}%`}
          y1={`${from.y}%`}
          x2={`${to.x}%`}
          y2={`${to.y}%`}
          stroke={`url(#grad-${id})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
          style={{
            animation: `dash-${id} 1.2s ease-in-out ${delay}ms forwards`,
          }}
        />
        {/* Arrow head */}
        <polygon
          points="0,0 8,4 0,8"
          fill="rgb(147,51,234)"
          transform={`translate(${to.x}, ${to.y}) rotate(${angle(from, to)})`}
        />
      </svg>

      {label && (
        <span
          className="absolute text-xs bg-white/80 dark:bg-gray-900/70 backdrop-blur px-2 py-1 rounded-full text-gray-700 dark:text-gray-200 border"
          style={{
            left: `calc(${(from.x + to.x) / 2}% - 32px)`,
            top: `calc(${(from.y + to.y) / 2}% - 10px)`,
          }}
        >
          {label}
        </span>
      )}
    </>
  );
}

function angle(a: { x: number; y: number }, b: { x: number; y: number }) {
  const rad = Math.atan2(b.y - a.y, b.x - a.x);
  return (rad * 180) / Math.PI;
}
