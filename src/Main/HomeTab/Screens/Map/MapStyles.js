import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    flex: 10
  },
  carousel: {
    position: 'absolute',
    elevation: 20,
    flex: 1,
    bottom: '1%',
    height: 90
  },
  carouselRenderContainer: {
    paddingTop: 3,
    padding: 3,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4
  },
  imageConstainer: {
    flex: 2,
    justifyContent: 'center'
  },
  renderImage: {
    width: '100%',
    height: 70
  },
  contentsContainer: { flex: 6, marginLeft: 5 },
  detailContainer: { flex: 2, alignItems: 'flex-end', marginRight: 10 },
  contentsText: {
    fontFamily: 'NanumGothic-Regular',
    fontSize: 12,
    color: 'black'
  },
  detailBtnContainer: {
    marginRight: 10,
    marginTop: 10,
    elevation: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#2089dc'
  },
  detailBtn: {
    backgroundColor: '#2089dc',
    padding: 2,
    fontSize: 15,
    color: 'white'
  },
  currentLocation: {
    backgroundColor: 'white',
    margin: 2,
    marginTop: 13,
    padding: 6,
    width: 35,
    height: 35
  },
  WaingImageText: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  markerNum: {
    position: 'absolute',
    bottom: '25%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red'
  }
});
export default styles;
