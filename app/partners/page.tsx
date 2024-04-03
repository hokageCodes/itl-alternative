"use client"
import React, {useState, useEffect} from 'react'
import ComingSoonPage from '@/components/coming-soon/ComingSoonPage'
import Loader from '@/components/loader/Loader';

export default function page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ComingSoonPage 
            heading="Coming Soon"
            paragraph="Watch this space for more details as we unveil the speakers for the ITL Conference 2025!"
          />
        </div>
      )}
    </>
  )
}


