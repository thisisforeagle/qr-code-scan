// supabaseService.js

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PASSWORD = process.env.SUPABASE_PASSWORD;

const supabase = createClient(SUPABASE_URL, SUPABASE_PASSWORD);

// Function to fetch data from a table
export const fetchData = async (table) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Function to insert data into a table
export const insertData = async (table, newData) => {
  const { data, error } = await supabase.from(table).insert(newData);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Function to update data in a table
export const updateData = async (table, id, updatedData) => {
  const { data, error } = await supabase
    .from(table)
    .update(updatedData)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Function to delete data from a table
export const deleteData = async (table, id) => {
  const { data, error } = await supabase.from(table).delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
