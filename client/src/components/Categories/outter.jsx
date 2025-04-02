"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Config from '@/config/Config'; 

const OuterCategories = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const categories = [
    { id: 1, name: 'الكل', value: 'all' },
    { id: 2, name: 'بنطلون', value: 'pants' },
    { id: 3, name: 'تيشرت', value: 'shirts' },
    { id: 4, name: 'هودي', value: 'hoodies' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setShowAll(false);
        const API_URL = `${Config.API_BASE_URL}/api/products`;
        
        if (selectedCategory === 'all') {
          // نجلب منتجات من كل فئة خارجية بشكل منفصل
          const pantsResponse = await axios.get(`${API_URL}?category=pants`);
          const shirtsResponse = await axios.get(`${API_URL}?category=shirts`);
          const hoodiesResponse = await axios.get(`${API_URL}?category=hoodies`);
          
          const pantsProducts = pantsResponse.data.products || [];
          const shirtsProducts = shirtsResponse.data.products || [];
          const hoodiesProducts = hoodiesResponse.data.products || [];
          
          // نجمع كل المنتجات
          const allProductsData = [
            ...pantsProducts,
            ...shirtsProducts,
            ...hoodiesProducts
          ];
          
          // نحفظ كل المنتجات
          setAllProducts(allProductsData);
          
          // نأخذ منتج واحد من كل فئة للعرض المبدئي
          const initialProducts = [
            ...(pantsProducts.length > 0 ? [pantsProducts[0]] : []),
            ...(shirtsProducts.length > 0 ? [shirtsProducts[0]] : []),
            ...(hoodiesProducts.length > 0 ? [hoodiesProducts[0]] : [])
          ];
          
          setProducts(initialProducts);
        } else {
          const url = `${API_URL}?category=${selectedCategory}`;
          const response = await axios.get(url);
          const productsData = response.data.products || [];
          
          // نحفظ كل المنتجات
          setAllProducts(productsData);
          
          // نعرض أول 4 منتجات فقط في البداية
          setProducts(productsData.slice(0, 4));
        }
        
        setError(null);
      } catch (err) {
        console.error('خطأ في جلب المنتجات:', err);
        setError('حدث خطأ أثناء تحميل المنتجات');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleShowMore = () => {
    setShowAll(true);
    setProducts(allProducts);
  };

  const handleProductClick = (product) => {
    router.push(`/ProductDetails/${product._id}`);
  };

  return (
    <section className="bg-gray-50 py-6 md:py-10" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-1 after:bg-blue-500 after:-bottom-2">
            الملابس الخارجية
          </h1>
          <div className="text-sm text-blue-500 font-medium">
            تشكيلة متنوعة 👕
          </div>
        </div>
        
        {/* شريط التصنيفات */}
        <div className="relative mb-8 border-b border-gray-200">
          <div className="flex flex-row overflow-x-auto no-scrollbar" dir="rtl">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 text-sm md:text-base transition-all duration-300 relative shrink-0
                  ${selectedCategory === category.value 
                    ? 'text-blue-600 font-bold after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'text-gray-500 hover:text-black'}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* عرض المنتجات */}
        <div className="relative">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-lg text-red-500">{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-lg">لا توجد منتجات متاحة في هذه الفئة</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {products.map((product) => (
                  <article 
                    key={product._id} 
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 relative">
                      <img 
                        src={`${Config.API_BASE_URL}${product.image}`} 
                        alt={product.name} 
                        className="w-full h-full object-contain transition duration-500 ease-in-out group-hover:scale-105"
                        onError={(e) => {
                          console.error(`خطأ في تحميل الصورة: ${product.image}`);
                          e.target.src = ''; 
                        }}
                      />
                      {product.isNew && (
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                          جديد
                        </div>
                      )}
                    </div>
                    <div className="p-3 md:p-4 text-right">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base truncate">
                        {product.name}
                      </h3>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex space-x-1 space-x-reverse">
                          {product.colors && product.colors.slice(0, 3).map((color) => (
                            <span 
                              key={color} 
                              className="w-4 h-4 rounded-full border border-gray-200" 
                              style={{ 
                                backgroundColor: 
                                  color === 'black' ? '#000000' :
                                  color === 'white' ? '#FFFFFF' :
                                  color === 'red' ? '#FF0000' :
                                  color === 'blue' ? '#0000FF' :
                                  color === 'green' ? '#008000' :
                                  color === 'yellow' ? '#FFFF00' :
                                  color === 'gray' ? '#808080' :
                                  color === 'brown' ? '#A52A2A' :
                                  color === 'navy' ? '#000080' :
                                  color === 'beige' ? '#F5F5DC' : '#CCCCCC'
                              }}
                            ></span>
                          ))}
                          {product.colors && product.colors.length > 3 && (
                            <span className="text-xs text-gray-500 mr-1">+{product.colors.length - 3}</span>
                          )}
                        </div>
                        
                        <div className="flex space-x-1 space-x-reverse">
                          {product.sizes && product.sizes.slice(0, 2).map((size) => (
                            <span key={size} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {size}
                            </span>
                          ))}
                          {product.sizes && product.sizes.length > 2 && (
                            <span className="text-xs text-gray-500">+{product.sizes.length - 2}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                        <div className="flex flex-col">
                          <span className="text-blue-600 font-bold text-base md:text-lg">{product.price} جنيه</span>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* زر عرض المزيد */}
              {!showAll && allProducts.length > products.length && (
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={handleShowMore}
                    className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium rounded-lg px-6 py-2.5 transition-colors"
                  >
                    عرض المزيد
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default OuterCategories;
