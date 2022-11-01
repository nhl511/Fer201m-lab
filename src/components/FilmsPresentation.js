import { Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { UserConsumer } from "./useContext";

export default function FilmsPresentation({ films }) {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);

  // return (
  //   <div className="container">
  //     <br />
  //     <h1
  //       className="text-center mb-5 common-title"
  //       style={{
  //         color: theme.color,
  //       }}
  //     >
  //       Phim Việt Nam Hay Nhất
  //     </h1>
  //     <br />
  //     <div className="row d-flex justify-content-around">
  //       {films.map((film) => (
  //         <div
  //           className="card col-sm-3 ps-0 pe-0 mb-5"
  //           style={{ border: "none" }}
  //         >
  //           <Link to={`Film/${film.id}`} style={{ textDecoration: "none" }}>
  //             <img
  //               src={film.img}
  //               className="card-img-to+
  //                       +
  //                       p hover13"
  //               style={{ height: "500px" }}
  //               alt="..."
  //             />

  //             <div
  //               className="card-body text-white"
  //               style={{
  //                 backgroundColor: theme.backgroundColor,
  //                 textDecoration: "none",
  //               }}
  //             >
  //               <h5
  //                 className="card-title text-center"
  //                 style={{ color: theme.color }}
  //               >
  //                 <b>{film.title}</b>
  //               </h5>
  //               <p
  //                 className="card-text d-flex justify-content-center"
  //                 style={{ color: theme.color }}
  //               >
  //                 <i>
  //                   {film.year} - {film.nation}
  //                 </i>
  //               </p>
  //               {/* <a data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" onClick={() => {setFilm(film)}} className="text-white card-text d-flex justify-content-center"><h6  style={{ color: theme.color,}}>Chi tiết<i class="ms-1 mt-1 fa-solid fa-circle-chevron-right"></i></h6></a> */}
  //             </div>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //     <div
  //       className="modal fade"
  //       id="exampleModal"
  //       tabindex="-1"
  //       aria-labelledby="exampleModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog">
  //         <div
  //           className="modal-content"
  //           style={{ backgroundColor: theme.backgroundColor }}
  //         >
  //           <div className="modal-header">
  //             <h2 className="" style={{ color: theme.color }}>
  //               {film.title}
  //             </h2>
  //             <button
  //               type="button"
  //               className="btn-close"
  //               data-bs-dismiss="modal"
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //           <div className="modal-body">
  //             <img className="mb-3" style={{ width: "100%" }} src={film.img} />
  //             <div className="" style={{ color: theme.color }}>
  //               {film.info}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  const styles = {
    media: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      width: 'auto',
      height: '342px',
    }
};
  return(
    <Grid container>
      <Grid item xs={12} className="film-title" pl={{xs:1 ,sm:7}}>
        <Typography variant="h5" color="white" align="left" mt={14} ml={2} pl={2} style={{borderLeft:'solid'}}>
          Phim Việt Nam Hay Nhất
        </Typography>
      </Grid>

      {films.map((film) => (

        <Grid item xs={12} sm={2} pt={5} mr={{sm:3}} className="film-list">
                    <Link to={`Film/${film.id}`} style={{ textDecoration: "none" }}>
          <Card style={{width:'240px', height:'520px', backgroundColor:'#292c35'}}>
            <CardActionArea>
            <Chip label="Full HD" style={{position:"absolute", backgroundColor:"#c0392b", color:"white"}}/>
              <CardMedia
                component="img"
                style={styles.media}
                image={film.img}
                alt="..."
                
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"                 
                  component="div"
                  align="left"
                  color="white"
                >
                  {film.title}
                </Typography>

              <Typography
                  variant="body2"
                  color="white"
                  align="left"
              
                >
                  {film.engTitle} ({film.year})
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>

      ))}
    </Grid>
  )
}
