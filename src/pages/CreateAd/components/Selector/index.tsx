import { MenuItem, Select, SelectLabel, SelectorContainer } from './styles';

interface OptionType {
  value: string;
  label: string;
}

interface ISelector {
  handleChanger: (selectedOption: string) => void
  cities: OptionType[]
  selectedCity: string
}

export const Selector = ({ handleChanger, cities, selectedCity }: ISelector) => {
  return (
    <SelectorContainer>
      <SelectLabel htmlFor="selector">
        Cidade
      </SelectLabel>
      <Select
        name="selector"
        id="demo-simple-select"
        value={selectedCity}
        onChange={(e) => handleChanger(e.target.value)}
      >
        <MenuItem value={''} disabled>Selecione um cidade</MenuItem>
        {
          cities.map((city) => (
            <MenuItem value={city.label} key={city.value}>{city.label}</MenuItem>
          ))
        }
      </Select>
    </SelectorContainer>
  )


};

