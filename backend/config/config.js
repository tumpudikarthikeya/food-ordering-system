require('dotenv').config();

module.exports = {
  supabase: {
    url: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  port: process.env.PORT || 5000,
//   jwt_secret: process.env.JWT_SECRET,
//   node_env: process.env.NODE_ENV || 'development'
};