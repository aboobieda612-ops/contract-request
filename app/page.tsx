import Image from "next/image";
import ContractForm from "./components/ContractForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center p-6 ">
      <ContractForm />
    </div>
  );
}
