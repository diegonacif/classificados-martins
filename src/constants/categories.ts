import { Icon } from "@phosphor-icons/react";
import { 
  Car, 
  City, 
  DeviceMobile, 
  HairDryer,
  Screwdriver,
  Armchair,
  SoccerBall,
  Dog,
  BabyCarriage,
  Newspaper,
  Factory,
} from "@phosphor-icons/react";


interface OptionType {
  value: string;
  label: string;
  icon: Icon
}

export const categories: OptionType[] = [
  { value: 'Imóveis', label: 'Imóveis', icon: City },
  { value: 'Veículos', label: 'Veículos', icon: Car },
  { value: 'Eletrônicos', label: 'Eletrônicos', icon: DeviceMobile },
  { value: 'Moda e Beleza', label: 'Moda e Beleza', icon: HairDryer },
  { value: 'Serviços', label: 'Serviços', icon: Screwdriver },
  { value: 'Móveis e Decoração', label: 'Móveis e Decoração', icon: Armchair },
  { value: 'Esportes e Lazer', label: 'Esportes e Lazer', icon: SoccerBall },
  { value: 'Animais', label: 'Animais', icon: Dog },
  { value: 'Infantil', label: 'Infantil', icon: BabyCarriage },
  { value: 'Empregos', label: 'Empregos', icon: Newspaper },
  { value: 'Negócios e Indústria', label: 'Negócios e Indústria', icon: Factory },
];
