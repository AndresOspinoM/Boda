const pool = require("../config/db");

// Obtener todos los invitados
exports.getGuests = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM guests");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agregar un invitado
exports.addGuest = async (req, res) => {
  const { name, guests_count, meal_choice } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO guests (name, guests_count, meal_choice) VALUES ($1, $2, $3) RETURNING *",
      [name, guests_count, meal_choice]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};