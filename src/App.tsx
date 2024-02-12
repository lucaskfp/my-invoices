import { Avatar, Button, Drawer, Table } from "@mantine/core";
import { Header, NewInvoice } from "./components";
import { IconAdjustmentsHorizontal, IconFileDollar } from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";

export function App() {
  const [opened, { open, close }] = useDisclosure(false);

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="max-w-5xl mx-auto px-6">
      <Header />

      <main>
        <div className="flex gap-4 mb-10">
          <Button leftSection={<IconFileDollar />} onClick={open}>
            <span>Add Despesa</span>
          </Button>

          <Button
            leftSection={<IconAdjustmentsHorizontal />}
            variant="light"
            color="gray"
          >
            <span>Filtros</span>
          </Button>
        </div>

        <div>
          <Table.ScrollContainer minWidth={500}>
            <Table verticalSpacing="lg" highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Due Date</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </div>
      </main>

      <Drawer opened={opened} onClose={close} title="Nova despesa">
        <NewInvoice />
      </Drawer>
    </div>
  );
}

const elements = [
  { position: <Avatar>IN</Avatar>, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
