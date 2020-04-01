import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import foodImgs from './foodImgs';

export default function HateFoodsListEntry({
  category,
  hateList,
  setHateList
}) {
  const [check, setCheck] = useState(false);

  // console.log('category~ ', category);
  // console.log('hateList cate ~,', hateList[category]); // true, false
  // console.log('check: ', check);
  // console.log('---------------------');
  // console.log('hatelist~~~', hateList);
  // let checked = hateList[category];

  useEffect(() => {
    // console.log('useEffect---');
    setCheck(hateList[category]);
  });

  let checkIcon = null;
  if (check) {
    checkIcon = <Icon name="check-circle-outline" size={25} color="black" />;
    // check-box-outline
  } else {
    checkIcon = (
      <Icon name="checkbox-blank-circle-outline" size={25} color="black" />
    );
    // checkbox-blank-outline
  }

  return (
    <View styles={styles.container}>
      <TouchableOpacity
        activeOpacity={1.0}
        style={[styles.Box, styles.boxMargin]}
        onPress={async () => {
          // setCheck(!check);
          setHateList({ ...hateList, [category]: !check });
        }}
      >
        <Grid>
          <Col size={1} />
          <Col size={3} style={{ justifyContent: 'center' }}>
            <Row
              size={2.5}
              style={{ justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <Image style={styles.categoryImage} source={foodImgs[category]} />
            </Row>
            <Row
              size={1}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </Row>
          </Col>
          <Col size={1} style={{ justifyContent: 'center' }}>
            {checkIcon}
          </Col>
        </Grid>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  boxMargin: {
    marginBottom: '2.5%',
    marginTop: '2.5%',
    marginLeft: '8%',
    marginRight: '8%'
  },
  Box: {
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 7
  },
  categoryImage: { height: '80%', width: '80%', position: 'relative' },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'NanumGothic-Bold',
    fontSize: 20,
    color: 'black'
  }
});
