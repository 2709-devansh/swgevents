interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'All Events' },
  { id: 'career', label: 'Career' },
  { id: 'academic', label: 'Academic' },
  { id: 'welfare', label: 'Welfare' },
];

const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
            activeFilter === filter.id
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-primary/15'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
