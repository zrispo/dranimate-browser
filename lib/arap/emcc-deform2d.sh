 /Users/bogo/Documents/emsdk_portable/emscripten/1.35.0/emcc -o deform2d.html main.cpp LinearAlgebra.cpp RigidMeshDeformer2D.cpp TriangleMesh.cpp WmlExtTriangleUtils.cpp WmlLinearSystemExt.cpp WmlBandedMatrix.cpp WmlBox2.cpp WmlGMatrix.cpp WmlGVector.cpp WmlLinearSystem.cpp WmlMath.cpp WmlMatrix4.cpp WmlVector2.cpp WmlVector3.cpp WmlVector4.cpp -s EXPORTED_FUNCTIONS='["_main","_createNewMesh","_setupMeshDeformer","_setMeshVertexData","_setMeshTriangleData","_getMeshVertexData","_addControlPoint","_setControlPointPosition","_updateMeshDeformation"]' -s NO_EXIT_RUNTIME=1