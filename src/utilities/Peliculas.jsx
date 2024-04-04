import React, { useEffect, useState } from "react";

export const fetchData = async () => {
   try {
      const response = await fetch('htps://raw.githubusercontent.com/wtuydev/test-json/main/films.json');
      const data = await response.json();
      return data;
   } catch{
      console.error('Error fetching data', error)
      throw error;
   }
}