#! /usr/bin/env bash

dot -Tpng ./ontology.dot > ./ontology_dot.png;
circo -Tpng ./ontology.dot > ./ontology_circo.png;
sfdp -Tpng ./ontology.dot > ./ontology_sfdp.png;
neato -Tpng ./ontology.dot > ./ontology_neato.png;
