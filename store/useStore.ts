import { create } from 'zustand';

type ViewType = 'cards' | 'table'
type StoreState = {
  detailsProductIdx: number;
  setDetailsProductIdx: (newIdx: number) => void;
  closeDetails: () => void;

  viewType: ViewType;
  setViewType: (newViewType: ViewType) => void;

  filters: string[];
  setFilters: (newFilters: string[]) => void;
}
const useStore = create<StoreState>((set) => ({
  detailsProductIdx: -1,
  setDetailsProductIdx: (newIdx) => set(() => ({ detailsProductIdx: newIdx })),
  closeDetails: () => set(() => ({ detailsProductIdx: -1 })),

  viewType: 'cards',
  setViewType: (newViewType) => set(() => ({ viewType: newViewType })),

  filters: [],
  setFilters: (newFilters) => set(() => ({ filters: newFilters }))
}));

export default useStore;