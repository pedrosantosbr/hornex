"use client";
import React from "react";
import cn from "classnames";
import Countdown, { zeroPad } from "react-countdown";

function CountdownDisplayWrapper({ days, hours, minutes, seconds }: any) {
  return (
    <div
      className={cn(
        "xs:text-lg flex items-center text-base font-medium -tracking-wider text-gray-900 dark:text-gray-100 md:text-xl xl:text-xl 2xl:text-2xl"
      )}
    >
      {!!days && (
        <div className="3xl:w-20 shrink-0">
          <span className="lining-nums">{zeroPad(days)}</span>
          <span>d</span>
          <span
            className={cn(
              "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 "
            )}
          >
            Days
          </span>
        </div>
      )}
      <div className="3xl:w-20 shrink-0">
        <span className="">{zeroPad(hours)}</span>
        <span>h</span>
        <span
          className={cn(
            "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400"
          )}
        >
          Hours
        </span>
      </div>
      <div className="3xl:w-20 shrink-0">
        <span className="">{zeroPad(minutes)}</span>
        <span>m</span>
        <span
          className={cn(
            "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 "
          )}
        >
          Minutes
        </span>
      </div>
      <div className="3xl:w-20 shrink-0">
        <span className="">{zeroPad(seconds)}</span>
        <span>s</span>
        <span
          className={cn(
            "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 "
          )}
        >
          Seconds
        </span>
      </div>
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return null;
  } else {
    return (
      <CountdownDisplayWrapper
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default function TournamentCountdown({
  date,
}: {
  date: string | number | Date | undefined;
}) {
  return <Countdown date={date} renderer={renderer} />;
}
