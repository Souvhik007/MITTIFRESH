

     const  currency = import.meta.VITE_CURRENCY;

       const navigate = useNavigate();
       const [user, setUser] = useState(null)
       const [isSeller, setisSeller] = useState(false)
       const [showUserLogin, setShowUserLogin] = useState(false)
       const [products, setProducts] = useState([])

       const [cartItems, setCartItems] = useState({})
       const [searchQuery, setSearchQuery] = useState({});


      // Fetch All Products
       const fetchProducts = async () =>{

          setProducts(dummyProducts);
       }

      // Add Products to Cart
      const addToCart =(itemId)=>{
          let cartData = structuredClone(cartItems);

          if(cartData[itemId]){
               cartData[itemId] += 1;
          } else{
               cartData[itemId] = 1;
          }
          setCartItems(cartData);
          toast.success("Added to Cart")
      }

      // Update Cart Item Quantity

      const updateCartItem = (itemId, quantity) =>{
         let cartData = structuredClone(cartItems);
         cartData[itemId] = quantity;
         setCartItems(cartData)
          toast.success("Cart Updated")

      }
       // Remove Product from Cart

      

   useEffect(()=>{

          fetchProducts(); const removeFromCart =(itemId)=>{
           let cartData = structuredClone(cartItems);
           if(cartData[itemId]){
               cartData[itemId] -= 1;
               if(cartData[itemId]===0 ) {
                    delete cartData[itemId];
               }
           }
           toast.success("Remove From Cart")
           setCartItems(cartData)
       }

       },[]);
    

       const value = {navigate, user, setUser, setisSeller, isSeller, showUserLogin, setShowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery}

     return <AppContext.Provider value={value}>
        {children}
     </AppContext.Provider>
}

export const useAppContext = () =>{
     return useContext(AppContext)
}
