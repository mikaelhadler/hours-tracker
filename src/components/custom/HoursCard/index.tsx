import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { FormSchema, HoursForm } from "../HoursForm";
import { z } from "zod";
import { Dialog } from "@/components/ui/dialog";
import DialogResults from "../DialogResults";
import {
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
const HoursCard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [contractedHours, setContractedHours] = useLocalStorage<number>(
    "contractedHours",
    0
  );
  const [totalHoursWorked, setTotalHoursWorked] = useLocalStorage<number>(
    "totalHoursWorked",
    0
  );
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    console.log(open);

    setContractedHours(data.contractedHours);
    setTotalHoursWorked(data.totalHoursWorked);
    setOpen(true);
  }
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <CardHeader>
        <CardTitle>Track Your Work Hours</CardTitle>
        <CardDescription>
          Input your contracted hours and total hours worked, including today,
          to calculate your progress.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <HoursForm onSubmit={onSubmit} />
      </CardContent>
      <DialogResults
        contractedHours={contractedHours}
        totalHoursWorked={totalHoursWorked}
      />
    </Dialog>
  );
};

export default HoursCard;
