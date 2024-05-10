"use client"

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const Theme2 = () => {
  const [theme, setTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchTheme = async () => {
      if (user) {
        try {
          const response = await fetch(`https://nyptech-learn.vercel.app/api/webhooks/${user.id}/theme`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setTheme(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTheme();
  }, [user]);
  const themed = "cupcake"
  return <input type="checkbox"         
  value={(theme) ?? (themed)} 
   className="invisible theme-controller" checked disabled/>
};

export default Theme2;
