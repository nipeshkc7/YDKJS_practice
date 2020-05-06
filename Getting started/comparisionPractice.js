/*
Practice comparisions and coercions

scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes).
It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd);
 return false if the meeting violates the work day bounds.
*/

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    var [, meetingStartHour, meetingStartMinutes] =
        startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

    durationMinutes = Number(durationMinutes);

    if (
        typeof meetingStartHour == "string" &&
        typeof meetingStartMinutes == "string"
    ) {
        let durationHours =
            Math.floor(durationMinutes / 60);
        durationMinutes =
            durationMinutes - (durationHours * 60);
        let meetingEndHour =
            Number(meetingStartHour) + durationHours;
        let meetingEndMinutes =
            Number(meetingStartMinutes) +
            durationMinutes;

        if (meetingEndMinutes >= 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes =
                meetingEndMinutes - 60;
        }

        // re-compose fully-qualified time strings
        // (to make comparison easier)
        let meetingStart = `${
            meetingStartHour.padStart(2, "0")
            }:${
            meetingStartMinutes.padStart(2, "0")
            }`;
        let meetingEnd = `${
            String(meetingEndHour).padStart(2, "0")
            }:${
            String(meetingEndMinutes).padStart(2, "0")
            }`;

        // NOTE: since expressions are all strings,
        // comparisons here are alphabetic, but it's
        // safe here since they're fully qualified
        // time strings (ie, "07:15" < "07:30")
        console.log(
            meetingStart >= dayStart &&
            meetingEnd <= dayEnd
            );
        return (
            meetingStart >= dayStart &&
            meetingEnd <= dayEnd
        );
    }
    console.log('false');
    return false;
}

scheduleMeeting("7:00", 15);     // false
scheduleMeeting("07:15", 30);    // false
scheduleMeeting("7:30", 30);     // true
scheduleMeeting("11:30", 60);    // true
scheduleMeeting("17:00", 45);    // true
scheduleMeeting("17:30", 30);    // false
scheduleMeeting("18:00", 15);    // false