import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Skills ()  {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {/* First Card */}
    <Card sx={{ maxWidth: 1245,margin: '20px', boxShadow: 18 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>


    {/* Second Card */}
    <Card sx={{ maxWidth: 1045, margin: '20px', boxShadow: 18 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>

    {/* Third Card (on a new line) */}
    <Card sx={{ maxWidth: 945, margin: '20px', boxShadow: 18  }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
       {/* Fourth Card (on a new line) */}
    <Card sx={{ maxWidth: 945, margin: '20px', boxShadow: 18  }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
         {/* Fifth Card (on a new line) */}
    <Card sx={{ maxWidth: 945, margin: '20px', boxShadow: 18  }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
         {/* Six Card (on a new line) */}
    <Card sx={{ maxWidth: 945, margin: '20px', alignItems:'center', boxShadow: 18  }}>
      <CardMedia
        sx={{ height: 230 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Another Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  </div>
  )
}
