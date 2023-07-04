"use client";
import React from "react";
import classnames from "classnames";
import Countdown, { zeroPad } from "react-countdown";

function CountdownDisplayWrapper({ days, hours, minutes, seconds }: any) {
  return (
    <div
      className={classnames(
        "xs:text-lg flex items-center gap-1 font-medium text-green-900 dark:text-green-100 md:text-xl lg:gap-1 xl:gap-1 xl:text-xl 2xl:text-2xl "
      )}
    >
      {!!days && (
        <div className="3xl:w-16 shrink-0">
          <pre className="text-xl">{zeroPad(days)}</pre>
          <span className="md:hidden">d</span>
          <span
            className={classnames(
              "hidden truncate pt-2.5 text-xs text-green-600 dark:text-green-400 md:block"
            )}
          >
            Days
          </span>
        </div>
      )}
      <div className="3xl:w-16 shrink-0">
        <pre className="text-xl">{zeroPad(hours)}</pre>
        <span className="md:hidden">h</span>
        <span
          className={classnames(
            "hidden truncate pt-2.5 text-xs text-green-600 dark:text-green-400 md:block"
          )}
        >
          Hours
        </span>
      </div>
      <div className="3xl:w-16 shrink-0">
        <pre className="text-xl">{zeroPad(minutes)}</pre>
        <span className="md:hidden">m</span>
        <span
          className={classnames(
            "hidden truncate pt-2.5 text-xs text-green-600 dark:text-green-400 md:block"
          )}
        >
          Mins
        </span>
      </div>
      <div className="3xl:w-16 shrink-0">
        <pre className="text-xl">{zeroPad(seconds)}</pre>
        <span className="md:hidden">s</span>
        <span
          className={classnames(
            "hidden truncate pt-2.5 text-xs text-green-600 dark:text-green-400 md:block"
          )}
        >
          Secs
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
