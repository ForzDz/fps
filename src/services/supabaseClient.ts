// Placeholder for future Supabase integration Client

export const supabase = null;

export const submitContactForm = async (data: Record<string, unknown>) => {
  console.log("Mock: Submitting contact form: ", data);
  return { success: true };
}

export const addLead = async (data: Record<string, unknown>) => {
  console.log("Mock: Adding lead: ", data);
  return { success: true };
}
