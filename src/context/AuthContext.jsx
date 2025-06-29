import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgisini al
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simüle edilmiş API çağrısı - gerçek uygulamada backend'e istek atılır
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basit doğrulama (gerçek uygulamada backend'den gelir)
      if (email === 'test@test.com' && password === '123456') {
        const userData = {
          id: 1,
          email: email,
          name: 'Test Kullanıcı',
          role: 'user'
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, message: 'Giriş başarılı!' };
      } else {
        return { success: false, message: 'E-posta veya şifre hatalı!' };
      }
    } catch (error) {
      return { success: false, message: 'Giriş yapılırken bir hata oluştu!' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basit doğrulama - gerçek uygulamada backend'den gelir
      const newUser = {
        id: Date.now(),
        email: userData.email,
        name: `${userData.firstName} ${userData.lastName}`,
        role: 'user'
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return { success: true, message: 'Kayıt başarılı! Hoş geldiniz!' };
    } catch (error) {
      return { success: false, message: 'Kayıt olurken bir hata oluştu!' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 