import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

type DialogResultsProps = {
  contractedHours: number; // Meta de horas no mês
  totalHoursWorked: number; // Horas já trabalhadas
};

const DialogResults: React.FC<DialogResultsProps> = ({
  contractedHours,
  totalHoursWorked,
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const businessDaysInMonth = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(currentYear, currentMonth, i + 1)
  ).filter((date) => date.getDay() !== 0 && date.getDay() !== 6).length;

  const remainingDays = Array.from(
    { length: daysInMonth - today.getDate() },
    (_, i) => new Date(currentYear, currentMonth, today.getDate() + i + 1)
  );

  const businessDaysRemaining = remainingDays.filter(
    (date) => date.getDay() !== 0 && date.getDay() !== 6
  ).length;

  const hoursRemaining = contractedHours - totalHoursWorked;
  const dailyWorkHours =
    businessDaysRemaining > 0 ? hoursRemaining / businessDaysRemaining : 0;
  const dailyWorkHoursDisplay = dailyWorkHours > 0 ? dailyWorkHours : 0;

  return (
    <DialogContent className="grid grid-cols-2 min-w-fit">
      <DialogHeader className="col-span-2">
        <DialogTitle>Required Daily Work Hours</DialogTitle>
        <DialogDescription>
          Here’s the number of hours you need to work per day to meet your goal.
        </DialogDescription>
      </DialogHeader>

      <Card>
        <CardHeader>
          <CardTitle>Total Hours Needed</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{hoursRemaining.toFixed(2)} hours</CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Hours Worked</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{totalHoursWorked.toFixed(2)} hours</CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Total Business Days in{" "}
            {today.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{businessDaysInMonth} business days</CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Remaining Business Days</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {businessDaysRemaining} business days remaining
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Work Hours Needed</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {dailyWorkHoursDisplay.toFixed(2)} hours per day
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Result</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {dailyWorkHoursDisplay.toFixed(4)} (hours) x {businessDaysRemaining}{" "}
            (days) = {hoursRemaining} hours
            <br />
            <br />
            Total: {hoursRemaining} + {totalHoursWorked} = {contractedHours}{" "}
          </CardDescription>
        </CardContent>
      </Card>
    </DialogContent>
  );
};

export default DialogResults;
