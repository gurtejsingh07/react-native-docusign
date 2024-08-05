import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FamilyTreeNode from '@components/tree/treeNode';
const Sample = require('@components/tree/sample.json');

export default class FamilyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: this.buildTreeData(Sample),
            selectedPersonId: null,
        };
    }

    buildTreeData(data) {
        let treeData = {};
        data.forEach(member => {
            treeData[member.id] = { ...member, children: member.children || [] };
        });
        return treeData;
    }

    handlePersonClick(id) {
        this.setState({ selectedPersonId: id });
    }

    render() {
        const { selectedPersonId, treeData } = this.state;
        const { title, titleStyle, titleColor } = this.props;
        const styles = this.props;

        return (
            <View style={{}}>
                <Text style={{ ...titleStyle, color: titleColor }}>{title}</Text>
                <ScrollView horizontal showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                    {selectedPersonId ? (
                        <FamilyTreeNode
                            member={treeData[selectedPersonId]}
                            treeData={treeData}
                            onPersonClick={(id) => this.handlePersonClick(id)}
                            level={1}
                            styles={styles}
                        />
                    ) : (
                        <FlatList
                            data={Sample}
                            //horizontal={true}
                            contentContainerStyle={{ padding: 50 }}
                            keyExtractor={(item, index) => `${item.name} + ${item.spouse}`}
                            listKey={(item, index) => `${item.name} + ${item.spouse}`}
                            initialScrollIndex={0}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => this.handlePersonClick(item.id)}
                                    style={styles.nodeStyle}
                                >
                                    <Image style={styles.imageStyle} source={{ uri: item.profile }} />
                                    <Text style={[styles.nodeTitleStyle, { color: styles.nodeTitleColor }]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </ScrollView>
            </View>
        );
    }
}

FamilyTree.defaultProps = {
    title: "My Family Tree",
    titleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    titleColor: 'black',
    data: Sample,
    nodeStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",
    },
    nodeTitleStyle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    pathColor: '#00ffd8',
    siblingGap: 50,
    imageStyle: {
        width: '50%',
        height: '50%',
        borderRadius: 50,
        resizeMode: 'cover'
    },
    nodeTitleColor: "#00ff00",
    familyGap: 0,
    strokeWidth: 5
};

FamilyTree.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    data: PropTypes.array,
    nodeStyle: PropTypes.object,
    nodeTitleStyle: PropTypes.object,
    pathColor: PropTypes.string,
    siblingGap: PropTypes.number,
    imageStyle: PropTypes.object,
    nodeTitleColor: PropTypes.string,
    familyGap: PropTypes.number,
    strokeWidth: PropTypes.number,
    titleColor: PropTypes.string
};
