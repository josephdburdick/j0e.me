"use client"

import React, { createContext, useContext, ReactNode, useState } from "react"

interface DataContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined)

interface DataProviderProps {
  initialData: any;
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({
  initialData,
  children,
}) => {
  const [data, setData] = useState(initialData)

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useApi = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useApi must be used within a DataProvider")
  }
  return context
}
