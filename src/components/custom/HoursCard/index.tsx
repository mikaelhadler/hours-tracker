import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import InputWithLabel from "../../ui/inputWithLabel";
import { Button } from "../../ui/button";
import DialogResults from "../DialogResults";

const HoursCard: React.FC = () => {
  const [contractedHours, setContractedHours] = useLocalStorage<number>(
    "contractedHours",
    0
  );
  const [totalHoursWorked, setTotalHoursWorked] = useLocalStorage<number>(
    "totalHoursWorked",
    0
  );
  console.log(contractedHours, totalHoursWorked);

  const handleChangeTotalHoursWorked = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(parseFloat(e.target.value))) return setTotalHoursWorked(0);
    setTotalHoursWorked(parseFloat(e.target.value));
  };

  const handleChangeContractedHours = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(parseFloat(e.target.value))) return setContractedHours(0);
    setContractedHours(parseFloat(e.target.value));
  };

  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Track Your Work Hours</CardTitle>
          <CardDescription>
            Input your contracted hours and total hours worked, including today,
            to calculate your progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <InputWithLabel
              label="Contracted Hours"
              onChange={handleChangeContractedHours}
              value={contractedHours ? contractedHours : ""}
              type="number"
              step="any"
            />
            <InputWithLabel
              label="Total Hours Worked"
              onChange={handleChangeTotalHoursWorked}
              value={totalHoursWorked ? totalHoursWorked : ""}
              type="number"
              step="any"
            />
            <DialogTrigger asChild>
              <Button>Calculate</Button>
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>
      <DialogResults
        contractedHours={contractedHours}
        totalHoursWorked={totalHoursWorked}
      />
    </Dialog>
  );
};

export default HoursCard;
