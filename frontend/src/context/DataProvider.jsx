import { createContext, useContext, useState, useEffect } from "react";
import { loadAllData } from "../services/api";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all data in parallel on mount
    loadAllData().then((allData) => {
      setData(allData);
      setLoading(false);
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function usePortfolioData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("usePortfolioData must be used within DataProvider");
  }
  return context;
}