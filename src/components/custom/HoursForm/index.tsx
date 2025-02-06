"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export const FormSchema = z.object({
  contractedHours: z.number().min(1, {
    message: "Contracted hours must be greater than 0",
  }),
  totalHoursWorked: z.number().min(1, {
    message: "Total hours worked must be greater than 0",
  }),
});

export function HoursForm({
  onSubmit,
}: {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contractedHours: 0,
      totalHoursWorked: 0,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="contractedHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contracted Hours</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="totalHoursWorked"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Hours Worked</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isValid}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
