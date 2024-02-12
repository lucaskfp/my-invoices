import {
  Alert,
  Button,
  Collapse,
  NumberInput,
  Select,
  Switch,
  TextInput,
} from "@mantine/core";

import { DateInput } from "@mantine/dates";
import { IconInfoCircle } from "@tabler/icons-react";
import { useForm } from "./use-form";

export function NewInvoice() {
  const {
    form,
    PERIOD_DATA,
    WEEKLY_PERIOD_DATA,
    MONTHLY_PERIOD_DATA,
    summaryMessage,
  } = useForm();

  const isRecurring = form.getInputProps("isRecurring").value;

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.table(values.recurrence);
      })}
      className="flex flex-col gap-4"
    >
      <TextInput
        required
        label="Nome"
        placeholder="Nome da despesa"
        data-autofocus
        {...form.getInputProps("name")}
      />

      <NumberInput
        required
        label="Valor"
        placeholder="R$ 0,00"
        prefix="R$"
        allowNegative={false}
        decimalSeparator=","
        decimalScale={2}
        thousandSeparator="."
        hideControls
        {...form.getInputProps("amount")}
      />

      <DateInput
        required={!isRecurring}
        label="Vencimento"
        placeholder="Data de vencimento"
        valueFormat="DD MMMM, YYYY"
        {...form.getInputProps("dueDate")}
        disabled={isRecurring}
      />

      <div className="bg-gray-700/5 dark:bg-gray-50/5 px-2 py-3 mt-1  rounded-lg">
        <Switch
          label="Despesa recorrente"
          {...form.getInputProps("isRecurring", { type: "checkbox" })}
          size="md"
        />

        <Collapse
          in={form.getInputProps("isRecurring").value}
          className="mt-2 flex flex-col gap-2"
        >
          <Select
            allowDeselect={false}
            label="Período"
            value="mensal"
            data={PERIOD_DATA}
            {...form.getInputProps("recurrence.period")}
          />

          {form.getInputProps("recurrence.period").value === "weekly" && (
            <Select
              allowDeselect={false}
              label="Dia que se repete"
              data={WEEKLY_PERIOD_DATA}
              {...form.getInputProps("recurrence.weekDay")}
            />
          )}

          {form.getInputProps("recurrence.period").value === "monthly" && (
            <NumberInput
              required
              label="Dia que se repete"
              allowNegative={false}
              max={31}
              min={1}
              allowDecimal={false}
              defaultValue={new Date().getDate()}
              {...form.getInputProps("recurrence.monthDay")}
            />
          )}

          {form.getInputProps("recurrence.period").value === "yearly" && (
            <div className="flex gap-2 items-end">
              <NumberInput
                required
                label="Dia que se repete"
                allowNegative={false}
                max={31}
                min={1}
                allowDecimal={false}
                defaultValue={new Date().getDate()}
                {...form.getInputProps("recurrence.monthDay")}
              />

              <Select
                allowDeselect={false}
                data={MONTHLY_PERIOD_DATA}
                {...form.getInputProps("recurrence.month")}
              />
            </div>
          )}

          <Alert
            variant="light"
            title={summaryMessage}
            className="mt-2 px-2 py-1"
            icon={<IconInfoCircle />}
          ></Alert>
        </Collapse>
      </div>

      <Button className="mt-4" type="submit">
        Salvar
      </Button>
    </form>
  );
}
