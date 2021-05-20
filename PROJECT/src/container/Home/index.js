import VideoCard from "../../component/Card";
import Loder from "../../component/Loder";
import Grid from "@material-ui/core/Grid";
import useStyles from "./MoreCardStyle";
import VideoList from "../../redux/Action/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const classes = useStyles();
  const dispatch= useDispatch()
  
  useEffect(()=>{
    dispatch(VideoList.list())
  },[dispatch])
  const datas=useSelector(({Video})=>Video)
  return (
    <>
      <Loder />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {datas.map((data,i) => (
            <Grid key={i} className={classes.paper}>
              <VideoCard data={data}></VideoCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Home;
