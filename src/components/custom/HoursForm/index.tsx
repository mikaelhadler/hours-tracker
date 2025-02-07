import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const FormSchema = z.object({
  contractedHours: z.number().min(1),
  totalHoursWorked: z.number().min(1),
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
        className="space-y-6"
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
