const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/stocks', async (req, res) => {
  const { data, error } = await supabase.from('stock_prices').select('*').limit(5);

  if (error) {
    console.error('Supabase error:', error.message);
    return res.status(500).json({ error: 'Failed to fetch stocks' });
  }

  res.json(data);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

