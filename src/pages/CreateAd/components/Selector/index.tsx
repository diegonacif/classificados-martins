import { MenuItem, Select, SelectLabel, SelectorContainer } from './styles';

interface OptionType {
  value: string;
  label: string;
}

interface ISelector {
  handleChanger: (selectedOption: string) => void
  cities: OptionType[]
  selectedCity: string
  error: boolean
  type: string
}

export const Selector = ({ handleChanger, cities, selectedCity, error, type }: ISelector) => {
  return (
    <SelectorContainer>
      <SelectLabel htmlFor="selector">
        {type === 'category' ? 'Categoria' : 'Cidade'}
      </SelectLabel>
      <Select
        name="selector"
        id={
          error && selectedCity === "" ? "error" :
          selectedCity === "" ? "no-value-selected" :
          ""
        }
        value={selectedCity}
        onChange={(e) => handleChanger(e.target.value)}
      >
        <MenuItem value={''} disabled>Selecione {type === 'category' ? 'uma categoria' : 'uma cidade'}</MenuItem>
        {
          cities.map((city) => (
            <MenuItem value={city.label} key={city.value}>{city.label}</MenuItem>
          ))
        }
      </Select>
    </SelectorContainer>
  )


};

