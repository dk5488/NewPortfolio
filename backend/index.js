const express=require('express');
const bodyParser=require('body-parser');
const contactRouter=require('./routes/contact');
const cors=require('cors');


const app=express();

const PORT=5000;

app.use(bodyParser.json());

app.use(
	cors({
		origin: '*',
		credentials: true,
	})
);

app.use('/api',contactRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});