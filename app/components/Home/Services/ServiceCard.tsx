import Image from "next/image";

type Props = {
      icon: string;
      name: string;
      description: string;
   }

const ServiceCard = ({ icon, name, description }: Props) => {

  return (
    <div>
      <Image src={icon} alt={name} width={60} height={60} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-[#1D3557]">{name}</h1>
      <p className="mt-6 text-[#457B9D]">{description}</p>
    </div>
  )
}

export default ServiceCard
