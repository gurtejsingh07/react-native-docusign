import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Line } from 'react-native-svg';

// Import the JSON data
const familyData = require('@components/tree/sample.json');

class FamilyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: this.buildTreeData(familyData),
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

    getMemberById(id) {
        return this.state.treeData[id];
    }

    handlePersonClick(id) {
        this.setState({ selectedPersonId: id });
    }
    renderTree(nodeId) {
        const member = this.getMemberById(nodeId);
        if (!member) return null;
    
        const parents = familyData.filter(person => (person.children || []).includes(nodeId));
        const siblings = parents.length > 0 ? (parents[0].children || []).filter(siblingId => siblingId !== nodeId) : [];
        const spouse = member.spouse ? this.getMemberById(member.spouse) : null;
        const children = member.children || [];
    
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                {/* Display Parents */}
                {parents.length > 0 && (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {parents.map(parent => (
                            <View key={parent.id} style={[styles.nodeStyle, styles.parentStyle]}>
                                <Image style={styles.imageStyle} source={{ uri: parent.profile }} />
                                <Text style={styles.nodeTitleStyle}>{parent.name}</Text>
                            </View>
                        ))}
                    </View>
                )}
                {parents.length > 0 && (
                    <Svg height="20" width="2" style={{ alignSelf: 'center' }}>
                        <Line x1="1" y1="0" x2="1" y2="20" stroke="black" strokeWidth="2" />
                    </Svg>
                )}
    
                {/* Display Spouse and Member */}
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.handlePersonClick(member.id)} style={styles.nodeStyle}>
                            <Image style={styles.imageStyle} source={{ uri: member.profile }} />
                            <Text style={styles.nodeTitleStyle}>{member.name}</Text>
                        </TouchableOpacity>
                        {spouse && (
                            <>
                                <Svg height="2" width="20" style={{ marginHorizontal: 10 }}>
                                    <Line x1="0" y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" />
                                </Svg>
                                <TouchableOpacity onPress={() => this.handlePersonClick(spouse.id)} style={[styles.nodeStyle, styles.spouseStyle]}>
                                    <Image style={styles.imageStyle} source={{ uri: spouse.profile }} />
                                    <Text style={styles.nodeTitleStyle}>{spouse.name}</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                    {this.hasChildren(member) && (
                        <>
                            <Svg height="20" width="2" style={{ marginTop: 10 }}>
                                <Line x1="1" y1="0" x2="1" y2="20" stroke="black" strokeWidth="2" />
                            </Svg>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                {children.map((childId, index) => (
                                    <View key={childId} style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 10 }}>
                                        {index > 0 && (
                                            <Svg height="2" width="20">
                                                <Line x1="0" y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" />
                                            </Svg>
                                        )}
                                        <TouchableOpacity onPress={() => this.handlePersonClick(childId)} style={styles.nodeStyle}>
                                            <Image style={styles.imageStyle} source={{ uri: this.getMemberById(childId).profile }} />
                                            <Text style={styles.nodeTitleStyle}>{this.getMemberById(childId).name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                </View>
    
                {/* Display Siblings */}
                {siblings.length > 0 && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Text style={[styles.nodeTitleStyle, { marginRight: 10 }]}>Siblings:</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            {siblings.map(siblingId => (
                                <TouchableOpacity key={siblingId} onPress={() => this.handlePersonClick(siblingId)} style={[styles.nodeStyle, styles.siblingStyle]}>
                                    <Image style={styles.imageStyle} source={{ uri: this.getMemberById(siblingId).profile }} />
                                    <Text style={styles.nodeTitleStyle}>{this.getMemberById(siblingId).name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        );
    }
    
    
    hasChildren(member) {
        return member.children && member.children.length > 0;
    }

    render() {
        const { selectedPersonId } = this.state;
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                {selectedPersonId
                    ? this.renderTree(selectedPersonId)
                    : familyData.map(member => (
                        <TouchableOpacity key={member.id} onPress={() => this.handlePersonClick(member.id)} style={styles.nodeStyle}>
                            <Image style={styles.imageStyle} source={{ uri: member.profile }} />
                            <Text style={styles.nodeTitleStyle}>{member.name}</Text>
                        </TouchableOpacity>
                    ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nodeStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nodeTitleStyle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default FamilyTree;
