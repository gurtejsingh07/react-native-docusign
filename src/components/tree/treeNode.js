import React from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import PropTypes from 'prop-types';
const FamilyTreeNode = ({member, treeData, onPersonClick, level, styles}) => {
  const hasChildren = member.children && member.children.length > 0;
  const hasParents = member.parents && member.parents.length > 0;
  const hasSiblings = member.siblings && member.siblings.length > 0;
  const hasSpouse = member?.spouse;
  const children = hasChildren
    ? member.children.map(childId => treeData[childId])
    : [];
  const parents = hasParents
    ? member.parents.map(parentId => treeData[parentId])
    : [];
  const siblings = hasSiblings
    ? member.siblings.map(siblingId => treeData[siblingId])
    : [];
  const spouse = hasSpouse ? treeData[member.spouse] : {};
  console.log('spousespousespousespousespousespousespouse', spouse);
  return (
    <ScrollView>
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row',alignItems:'center'}}>
        <TouchableOpacity
          onPress={() => onPersonClick(member.id)}
          style={[styles.nodeStyle]}>
          <Image style={styles.imageStyle} source={{uri: member.profile}} />
          <Text style={[styles.nodeTitleStyle, {color: styles.nodeTitleColor}]}>
            {member.name}
          </Text>
        </TouchableOpacity>
      
        {hasSpouse && (
          <View style={{flexDirection: 'row'}}>
            <View style={{top: 20,position:'absolute',marginLeft:-25}}>
              <Svg height="50" width="50">
                <Line
                  x1="0"
                  y1="50%"
                  x2="150"
                  y2="50%"
                  stroke={styles.pathColor}
                  strokeWidth={styles.strokeWidth}
                />
              </Svg>
              <View style={{top: -25}}>
                <Svg height="50" width="50">
                  <Line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="150"
                    stroke={styles.pathColor}
                    strokeWidth={styles.strokeWidth}
                  />
                </Svg>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => onPersonClick(spouse.id)}
              style={[styles.nodeStyle]}>
              <Image style={styles.imageStyle} source={{uri: spouse.profile}} />
              <Text
                style={[styles.nodeTitleStyle, {color: styles.nodeTitleColor}]}>
                {spouse.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {hasChildren && (
        <>
        <View style={{top:-5}}>
        <Svg height="50" width="20">
            <Line
              x1="50%"
              y1="0"
              x2="50%"
              y2="150"
              stroke={styles.pathColor}
              strokeWidth={styles.strokeWidth}
            />
          </Svg>
        </View>
      
          <View style={{flexDirection: 'row'}}>
            {children.map((child, index) => (
              <View
                key={child.id}
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginHorizontal: styles.familyGap,
                  top:-5
                }}>
                {children.length > 1 && (
                  <Svg height="50" width="100%">
                    <Line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke={styles.pathColor}
                      strokeWidth={styles.strokeWidth}
                    />
                    {index > 0 && (
                      <Line
                        x1="0"
                        y1="0"
                        x2="50%"
                        y2="0"
                        stroke={styles.pathColor}
                        strokeWidth={styles.strokeWidth}
                      />
                    )}
                    {index < children.length - 1 && (
                      <Line
                        x1="50%"
                        y1="0"
                        x2="100%"
                        y2="0"
                        stroke={styles.pathColor}
                        strokeWidth={styles.strokeWidth}
                      />
                    )}
                  </Svg>
                )}
                <FamilyTreeNode
                  member={child}
                  treeData={treeData}
                  onPersonClick={onPersonClick}
                  level={level + 1}
                  styles={styles}
                />
              </View>
            ))}
          </View>
        </>
      )}
    </View>
    </ScrollView>
  );
};

FamilyTreeNode.propTypes = {
  member: PropTypes.object.isRequired,
  treeData: PropTypes.object.isRequired,
  onPersonClick: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
};

export default FamilyTreeNode;
