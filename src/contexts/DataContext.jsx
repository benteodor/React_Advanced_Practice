import { createContext } from "react"; 

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const response = await getDataa(url);
        SVGMetadataElement(response);
      };
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <DataContext.Provider value={{data, setData}}>
        {children}
        </DataContext.Provider>
    );
};