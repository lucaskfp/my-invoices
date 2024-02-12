import { useForm as useMantineForm } from "@mantine/form";

export const useForm = () => {
  const form = useMantineForm({
    initialValues: {
      name: undefined,
      amount: undefined,
      dueDate: new Date(),
      isRecurring: false,
      recurrence: {
        period: PERIOD_DATA[2].value,
        weekDay: new Date().getDay().toString(),
        monthDay: new Date().getDate().toString(),
        month: new Date().getMonth().toString(),
      },
    },

    validate: {
      amount: (value) =>
        value && value > 0 ? null : "O valor precisa ser maior que zero",
    },
  });

  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(form.getInputProps("amount").value ?? 0);

  const periodValue = form.getInputProps("recurrence.period").value;

  const formattedPeriodText =
    PERIOD_TEXT_FORMATTED[periodValue as keyof typeof PERIOD_TEXT_FORMATTED];

  const prefixSummaryMessage = "Despesa recorrente de";
  let summaryMessage = "";

  if (periodValue === "daily") {
    summaryMessage = `${prefixSummaryMessage}  ${formattedAmount} que se repetirá ${formattedPeriodText}`;
  }

  if (periodValue === "weekly") {
    const weeklyValue = form.getInputProps("recurrence.weekDay").value;

    summaryMessage = `${prefixSummaryMessage}  ${formattedAmount} que se repetirá ${formattedPeriodText} ${
      weeklyValue !== "0" && weeklyValue !== "6" ? "na" : "no"
    } ${WEEKLY_PERIOD_DATA.find((v) => v.value === weeklyValue)?.label}`;
  }

  if (periodValue === "monthly") {
    const dueDateValue = form.getInputProps("recurrence.monthDay").value;

    summaryMessage = `${prefixSummaryMessage}  ${formattedAmount} que se repetirá ${formattedPeriodText} no dia ${
      !dueDateValue || dueDateValue === "" ? "?" : dueDateValue
    }`;
  }

  if (periodValue === "yearly") {
    const dueDateValue = form.getInputProps("recurrence.monthDay").value;
    const monthValue = form.getInputProps("recurrence.month").value;
    const monthLabel = MONTHLY_PERIOD_DATA.find(
      (month) => month.value === monthValue
    )?.label;

    summaryMessage = `${prefixSummaryMessage}  ${formattedAmount} que se repetirá ${formattedPeriodText} no dia ${
      !dueDateValue || dueDateValue === "" ? "?" : dueDateValue
    } de ${monthLabel}`;
  }

  return {
    PERIOD_TEXT_FORMATTED,
    PERIOD_DATA,
    WEEKLY_PERIOD_DATA,
    MONTHLY_PERIOD_DATA,
    form,
    summaryMessage,
  };
};

enum PERIOD_TEXT_FORMATTED {
  daily = "diariamente",
  weekly = "semanalmente",
  monthly = "mensalmente",
  yearly = "anualmente",
}

const PERIOD_DATA = [
  {
    value: "daily",
    label: "Diário",
  },
  {
    value: "weekly",
    label: "Semanal",
  },
  {
    value: "monthly",
    label: "Mensal",
  },
  {
    value: "yearly",
    label: "Anual",
  },
];

const WEEKLY_PERIOD_DATA = [
  { value: "0", label: "Domingo" },
  { value: "1", label: "Segunda-feira" },
  { value: "2", label: "Terça-feira" },
  { value: "3", label: "Quarta-feira" },
  { value: "4", label: "Quinta-feira" },
  { value: "5", label: "Sexta-feira" },
  { value: "6", label: "Sábado" },
];

const MONTHLY_PERIOD_DATA = [
  { value: "0", label: "Janeiro" },
  { value: "1", label: "Fevereiro" },
  { value: "2", label: "Março" },
  { value: "3", label: "Abril" },
  { value: "4", label: "Maio" },
  { value: "5", label: "Junho" },
  { value: "6", label: "Julho" },
  { value: "7", label: "Agosto" },
  { value: "8", label: "Setembro" },
  { value: "9", label: "Outubro" },
  { value: "10", label: "Novembro" },
  { value: "11", label: "Dezembro" },
];
