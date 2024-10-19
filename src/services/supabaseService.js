// supabaseService.js

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const SUPABASE_URL = "https://xrsrdfsvehmnodmovhcl.supabase.co";
const SUPABASE_PASSWORD =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyc3JkZnN2ZWhtbm9kbW92aGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNTY5NDYsImV4cCI6MjA0NDkzMjk0Nn0.LFwHRJyG1Qe08r9GBIE9nD90YE5Yai7fzlqiM5y-xpU";

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
  const { data, error } = await supabase.from(table).insert({
    data: newData,
  });

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
