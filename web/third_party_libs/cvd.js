var cvdR = {"Right":{"exprDim":2,"exprString":"<span class=\"addrWrapper\" id=\"addr-wrap-Just (Address (SubFace 2 (fromList [])) [])\">hcomp (λ 𝒊₀ → λ  { \n     ((𝑰₀) = i1) → <span class=\"addrWrapper\" id=\"addr-wrap-Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(0,True)]))])\">(y)</span>\n     ;((~ 𝑰₁) = i1) → <span class=\"addrWrapper\" id=\"addr-wrap-Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,False)]))])\">(y)</span>\n     ;((𝑰₁) = i1) → <span class=\"addrWrapper\" id=\"addr-wrap-Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,True)]))])\">(x(𝑰₀ ∨ 𝒊₀))</span>\n     })\n(<span class=\"addrWrapper\" id=\"addr-wrap-Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList []))])\">(x(𝑰₀ ∨ ~ 𝑰₁))</span>)</span>","mbDefName":"Cubical.Foundations.GroupoidLaws.lCancel","webGlDescriptors":[{"dAddrMap":[["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(0,True)]))])",[[0,6],[0.78571427,0.5]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,False)]))])",[[6,6],[0.5,0.21428573]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,True)]))])",[[12,102],[0.5,0.78571427]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList []))])",[[114,102],[0.5,0.5]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnCylinder (SubFace 1 (fromList [(0,True)]))])",[[216,24],[0,0.78571427]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnBottom (SubFace 1 (fromList []))])",[[240,24],[0,0.5]]]],"dDrawCommands":"webgl.disable(webgl.BLEND);\nwebgl.clearDepth(1);\nwebgl.depthFunc(webgl.LEQUAL)\nwebgl.uniform4fv(uLoc[\"euler\"], [72.0,0.0,-36.0,0.5]);\nwebgl.uniform2fv(uLoc[\"screen\"], [w , h]);\nwebgl.uniform1fv(uLoc[\"shade\"], [1]);\nwebgl.uniform1fv(uLoc[\"scaleG\"], [1]);\nwebgl.uniform2fv(uLoc[\"screenDelta\"], [0.0,0.0]);\nwebgl.uniform1fv(uLoc[\"VisF\"], [1]);\n","dElemNum":264,"dInitCommands":"var arrId = webgl.getAttribLocation(program, \"vPosition\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,0)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Normal\");\nwebgl.vertexAttribPointer(arrId, 3, webgl.FLOAT, false ,56,16)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Color\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,28)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Mode\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,44)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"VisFlagF\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,48)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"ObjGroup\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,52)\nwebgl.enableVertexAttribArray(arrId);\n","dLineWidth":2,"dPrimitiveMode":"Triangles","dStartIndex":0,"dvertexData":[0.7,0.3,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,1,0,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,1,1,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,0.7,0.3,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,0.7,0.7,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,1,1,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,0.3,0.3,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,0,0,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,1,0,0,0,0,0,0.3,0.5,0.5,0.5,1,3,1,0,0.3,0.3,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,0.7,0.3,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,1,0,0,0,0,0,-0.12,0.5,0.5,0.5,1,3,1,0,0.637931,0.84482753,0,0,0,0,3.377897e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,3.377897e-3,0.5,0,0.4376936,1,0,64,0,0.61428565,0.78571427,0,0,0,0,3.377897e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,-1.847291e-3,0.5,0,0.4376936,1,0,64,0,0.637931,0.84482753,0,0,0,0,-1.847291e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,-1.847291e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,-1.530613e-3,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,-1.530613e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,-1.530613e-3,0.5,0,0.4376936,1,0,64,0,0.637931,0.8448276,0,0,0,0,3.6945813e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,3.6945813e-3,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,3.6945813e-3,0.5,0,0.4376936,1,0,64,0,0.15517247,0.84482753,0,0,0,0,6.6884547e-3,0.5,0,0.4376936,1,0,64,0,0.43750003,0.8125,0,0,0,0,6.6884547e-3,0.5,0,0.4376936,1,0,64,0,0.362069,0.84482753,0,0,0,0,6.6884547e-3,0.5,0,0.4376936,1,0,64,0,0.18750003,0.8125,0,0,0,0,-8.081883e-3,0.5,0,0.4376936,1,0,64,0,0.15517247,0.84482753,0,0,0,0,-8.081883e-3,0.5,0,0.4376936,1,0,64,0,0.43750003,0.8125,0,0,0,0,-8.081883e-3,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,-8.081898e-3,0.5,0,0.4376936,1,0,64,0,0.36206898,0.8448276,0,0,0,0,-8.081898e-3,0.5,0,0.4376936,1,0,64,0,0.4375,0.8125,0,0,0,0,-8.081898e-3,0.5,0,0.4376936,1,0,64,0,0.15517244,0.8448276,0,0,0,0,6.688467e-3,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,6.688467e-3,0.5,0,0.4376936,1,0,64,0,0.36206898,0.8448276,0,0,0,0,6.688467e-3,0.5,0,0.4376936,1,0,64,0,0.59756094,0.74390244,0,0,0,0,-2.3892443e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,-2.3892443e-3,0.5,0,0.4376936,1,0,64,0,0.61428565,0.78571427,0,0,0,0,-2.3892443e-3,0.5,0,0.4376936,1,0,64,0,0.55263156,0.7631579,0,0,0,0,1.1003107e-3,0.5,0,0.4376936,1,0,64,0,0.59756094,0.74390244,0,0,0,0,1.1003107e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,1.1003107e-3,0.5,0,0.4376936,1,0,64,0,0.5526316,0.76315784,0,0,0,0,1.2889385e-3,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,1.2889385e-3,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,1.2889385e-3,0.5,0,0.4376936,1,0,64,0,0.597561,0.74390244,0,0,0,0,-2.2006205e-3,0.5,0,0.4376936,1,0,64,0,0.5526316,0.76315784,0,0,0,0,-2.2006205e-3,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,-2.2006205e-3,0.5,0,0.4376936,1,0,64,0,0.25609756,0.74390244,0,0,0,0,-2.817873e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,-2.817873e-3,0.29179573,0.5,0,1,0,32,0,0.40243906,0.74390244,0,0,0,0,-2.817873e-3,0.29179573,0.5,0,1,0,32,0,0.23684213,0.7631579,0,0,0,0,4.053781e-3,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,4.053781e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,4.053781e-3,0.29179573,0.5,0,1,0,32,0,0.23684213,0.76315784,0,0,0,0,4.0537682e-3,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,4.0537682e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.76315784,0,0,0,0,4.0537682e-3,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,-2.8178636e-3,0.29179573,0.5,0,1,0,32,0,0.23684213,0.76315784,0,0,0,0,-2.8178636e-3,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,-2.8178636e-3,0.29179573,0.5,0,1,0,32,0,0.637931,0.84482753,0,0,0,0,-4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,-4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.84482753,0,0,0,0,-4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,2.0204708e-3,0.5,0,0.4376936,1,0,64,0,0.637931,0.84482753,0,0,0,0,2.0204708e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,2.0204708e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.637931,0.8448276,0,0,0,0,-4.458977e-3,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,-4.458977e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,-4.458977e-3,0.5,0,0.4376936,1,0,64,0,0.362069,0.84482753,0,0,0,0,4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.84482753,0,0,0,0,4.4589685e-3,0.5,0,0.4376936,1,0,64,0,0.43750003,0.8125,0,0,0,0,-2.0204699e-3,0.5,0,0.4376936,1,0,64,0,0.362069,0.84482753,0,0,0,0,-2.0204699e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,-2.0204699e-3,0.5,0,0.4376936,1,0,64,0,0.4375,0.8125,0,0,0,0,-2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,-2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,-2.0204745e-3,0.5,0,0.4376936,1,0,64,0,0.36206898,0.8448276,0,0,0,0,4.458978e-3,0.5,0,0.4376936,1,0,64,0,0.4375,0.8125,0,0,0,0,4.458978e-3,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,4.458978e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,-2.3106546e-3,0.5,0,0.4376936,1,0,64,0,0.55263156,0.7631579,0,0,0,0,-2.3106546e-3,0.5,0,0.4376936,1,0,64,0,0.59756094,0.74390244,0,0,0,0,-2.3106546e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.7,0,0,0,0,2.526318e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,2.526318e-3,0.5,0,0.4376936,1,0,64,0,0.55263156,0.7631579,0,0,0,0,2.526318e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,3.08087e-3,0.5,0,0.4376936,1,0,64,0,0.597561,0.74390244,0,0,0,0,3.08087e-3,0.5,0,0.4376936,1,0,64,0,0.5526316,0.76315784,0,0,0,0,3.08087e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,-1.7560966e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,-1.7560966e-3,0.5,0,0.4376936,1,0,64,0,0.597561,0.74390244,0,0,0,0,-1.7560966e-3,0.5,0,0.4376936,1,0,64,0,0.42000002,0.7,0,0,0,0,2.3106546e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,2.3106546e-3,0.29179573,0.5,0,1,0,32,0,0.40243906,0.74390244,0,0,0,0,2.3106546e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,-2.526316e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,-2.526316e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,-2.526316e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,-3.0808714e-3,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,-3.0808714e-3,0.29179573,0.5,0,1,0,32,0,0.44736844,0.76315784,0,0,0,0,-3.0808714e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,1.7560979e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,1.7560979e-3,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,1.7560979e-3,0.29179573,0.5,0,1,0,32,0,0.3,0.7,0,0,0,0,-0.3,0.5,0.5,0.5,1,3,1,0,0,1,0,0,0,0,-0.3,0.5,0.5,0.5,1,3,1,0,1,1,0,0,0,0,-0.3,0.5,0.5,0.5,1,3,1,0,0.3,0.7,0,0,0,0,0.12,0.5,0.5,0.5,1,3,1,0,0.7,0.7,0,0,0,0,0.12,0.5,0.5,0.5,1,3,1,0,1,1,0,0,0,0,0.12,0.5,0.5,0.5,1,3,1,0,0.58,0.58,0,0,0,0,3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.53999996,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.54,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.5,0,0,0,0,-1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.54,0,0,0,0,3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.3,0.58,0,0,0,0,4.8000026e-3,0.29179573,0.5,0,1,0,64,0,0.46,0.53999996,0,0,0,0,4.8000026e-3,0.29179573,0.5,0,1,0,64,0,0.42000002,0.58,0,0,0,0,4.8000026e-3,0.29179573,0.5,0,1,0,64,0,0.3,0.53999996,0,0,0,0,-6.400003e-3,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,-6.400003e-3,0.29179573,0.5,0,1,0,64,0,0.46,0.53999996,0,0,0,0,-6.400003e-3,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,-6.3999924e-3,0.29179573,0.5,0,1,0,64,0,0.42000002,0.58,0,0,0,0,-6.3999924e-3,0.29179573,0.5,0,1,0,64,0,0.45999998,0.54,0,0,0,0,-6.3999924e-3,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,4.7999956e-3,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,4.7999956e-3,0.29179573,0.5,0,1,0,64,0,0.42000002,0.58,0,0,0,0,4.7999956e-3,0.29179573,0.5,0,1,0,64,0,0.58,0.42000002,0,0,0,0,-3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,-3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,-3.200001e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.46,0,0,0,0,1.6000005e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.42000002,0,0,0,0,1.6000005e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,1.6000005e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.45999998,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.5,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.42000002,0,0,0,0,-3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.45999998,0,0,0,0,-3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,-3.1999962e-3,0.5,0,0.4376936,1,0,64,0,0.3,0.42000002,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,6.3999984e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,-4.7999993e-3,0.5,0,0.4376936,1,0,32,0,0.58,0.7,0,0,0,0,4.8000026e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.53999996,0,0,0,0,4.8000026e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,4.8000026e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.7,0,0,0,0,-6.4000045e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,-6.4000045e-3,0.5,0,0.4376936,1,0,64,0,0.53999996,0.53999996,0,0,0,0,-6.4000045e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,-6.3999924e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,-6.3999924e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.54,0,0,0,0,-6.3999924e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,4.7999956e-3,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,4.7999956e-3,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,4.7999956e-3,0.5,0,0.4376936,1,0,64,0,0.42000002,0.7,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.53999996,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.58,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,6.4e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,6.4e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.53999996,0,0,0,0,6.4e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,6.3999975e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.58,0,0,0,0,6.3999975e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.54,0,0,0,0,6.3999975e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.42000002,0.58,0,0,0,0,-4.7999993e-3,0.29179573,0.5,0,1,0,32,0,0.58,0.42000002,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.53999996,0.46,0,0,0,0,-1.5999981e-3,0.5,0,0.4376936,1,0,32,0,0.58,0.42000002,0,0,0,0,-1.5999981e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,-1.5999981e-3,0.5,0,0.4376936,1,0,32,0,0.54,0.46,0,0,0,0,-1.6000005e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,-1.6000005e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,-1.6000005e-3,0.5,0,0.4376936,1,0,32,0,0.58,0.42000002,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.54,0.46,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,1.5999994e-3,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,-3.1999988e-3,0.5,0,0.4376936,1,0,32,0,0.3,0.3,0,0,0,0,-0.15999998,0.5,0.5,0.5,1,3,1,0,0.3,0.7,0,0,0,0,-0.15999998,0.5,0.5,0.5,1,3,1,0,0.7,0.7,0,0,0,0,-0.15999998,0.5,0.5,0.5,1,3,1,0,0.3,0.3,0,0,0,0,0.15999998,0.5,0.5,0.5,1,3,1,0,0.7,0.3,0,0,0,0,0.15999998,0.5,0.5,0.5,1,3,1,0,0.7,0.7,0,0,0,0,0.15999998,0.5,0.5,0.5,1,3,1,0,0.15517247,0.84482753,0,0,0,0,-5.016343e-3,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,-5.016343e-3,0.5,0,0.4376936,1,0,64,0,0,0.84482753,0,0,0,0,-5.016343e-3,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,6.0614124e-3,0.5,0,0.4376936,1,0,64,0,0.15517247,0.84482753,0,0,0,0,6.0614124e-3,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,6.0614124e-3,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,6.0614236e-3,0.5,0,0.4376936,1,0,64,0,0,0.8448276,0,0,0,0,6.0614236e-3,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,6.0614236e-3,0.5,0,0.4376936,1,0,64,0,0.15517241,0.8448276,0,0,0,0,-5.01635e-3,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,-5.01635e-3,0.5,0,0.4376936,1,0,64,0,0,0.8448276,0,0,0,0,-5.01635e-3,0.5,0,0.4376936,1,0,64,0,0.25609756,0.74390244,0,0,0,0,4.931276e-3,0.29179573,0.5,0,1,0,32,0,0,0.7631579,0,0,0,0,4.931276e-3,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,4.931276e-3,0.29179573,0.5,0,1,0,32,0,0.23684208,0.7631579,0,0,0,0,-4.560503e-3,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,-4.560503e-3,0.29179573,0.5,0,1,0,32,0,0,0.7631579,0,0,0,0,-4.560503e-3,0.29179573,0.5,0,1,0,32,0,0.23684216,0.76315784,0,0,0,0,-4.56049e-3,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,-4.56049e-3,0.29179573,0.5,0,1,0,32,0,0,0.76315784,0,0,0,0,-4.56049e-3,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,4.931261e-3,0.29179573,0.5,0,1,0,32,0,0.23684216,0.76315784,0,0,0,0,4.931261e-3,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,4.931261e-3,0.29179573,0.5,0,1,0,32,0,0.3,0.58,0,0,0,0,-1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0,0.53999996,0,0,0,0,-1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,-1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.53999996,0,0,0,0,1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0,0.53999996,0,0,0,0,1.2000007e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0,0.54,0,0,0,0,1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,-1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,-1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,-1.1999989e-2,0.29179573,0.5,0,1,0,64,0,0.3,0.42000002,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,-1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,1.1999998e-2,0.5,0,0.4376936,1,0,32,0]},{"dAddrMap":[["Nothing",[[0,42],[]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(0,False),(1,True)]))])",[[42,12],[0.21428573,0.78571427]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,True)]))])",[[54,96],[0.5,0.78571427]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList []))])",[[150,96],[0.5,0.5]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList [(0,False)]))])",[[246,12],[0.3,0.5]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList [(1,True)]))])",[[258,12],[0.5,0.7]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnCylinder (SubFace 1 (fromList [(0,True)]))])",[[270,36],[0,0.78571427]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnBottom (SubFace 1 (fromList []))])",[[306,36],[0,0.5]]]],"dDrawCommands":"webgl.disable(webgl.BLEND);\nwebgl.clearDepth(1);\nwebgl.depthFunc(webgl.LEQUAL)\nwebgl.uniform4fv(uLoc[\"euler\"], [72.0,0.0,-36.0,0.5]);\nwebgl.uniform2fv(uLoc[\"screen\"], [w , h]);\nwebgl.uniform1fv(uLoc[\"shade\"], [0]);\nwebgl.uniform1fv(uLoc[\"scaleG\"], [1]);\nwebgl.uniform2fv(uLoc[\"screenDelta\"], [0.0,0.0]);\nwebgl.uniform1fv(uLoc[\"VisF\"], [1]);\n","dElemNum":228,"dInitCommands":"var arrId = webgl.getAttribLocation(program, \"vPosition\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,0)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Normal\");\nwebgl.vertexAttribPointer(arrId, 3, webgl.FLOAT, false ,56,16)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Color\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,28)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Mode\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,44)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"VisFlagF\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,48)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"ObjGroup\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,52)\nwebgl.enableVertexAttribArray(arrId);\n","dLineWidth":2,"dPrimitiveMode":"Lines","dStartIndex":0,"dvertexData":[0,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.7,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,1,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.7,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,1,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.3,0.3,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0,0,0,0,0,0,0,0.9,0.9,0.9,1,0,1,0,0.1875,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.15517245,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.15517241,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.23684211,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.23684213,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.637931,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.61428565,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.637931,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.15517247,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.362069,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.18750003,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.43750003,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.4375,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.15517244,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.36206898,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.59756094,0.74390244,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.61428565,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55263156,0.7631579,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5526316,0.76315784,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55714285,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.597561,0.74390244,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.6142857,0.78571427,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.40243906,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.23684213,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.23684213,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.44736844,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.637931,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5625,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.637931,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.362069,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.43750003,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.4375,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.36206898,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.59756094,0.74390244,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.55263156,0.7631579,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.5526316,0.76315784,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.597561,0.74390244,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.40243906,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.44736844,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.44736844,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.40243903,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.58,0.58,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.53999996,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.54,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.42000002,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.46,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.45999998,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.42000002,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.58,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.45999998,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.5,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.53999996,0.53999996,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.54,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.58,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.58,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.53999996,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.54,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.58,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.46,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.42000002,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.5,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.53999996,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.58,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.54,0.7,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.42000002,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.46,0.7,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.15517247,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.84482753,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.1875,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.8125,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.15517241,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0,0.8448276,0,0,0,0,0,0.5,0,0.4376936,1,0,64,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.23684208,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.7631579,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.23684216,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.76315784,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0.25609756,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.74390244,0,0,0,0,0,0.29179573,0.5,0,1,0,32,0,0,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.53999996,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.54,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0,0.58,0,0,0,0,0,0.29179573,0.5,0,1,0,64,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.46,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0.3,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0,0,0.42000002,0,0,0,0,0,0.5,0,0.4376936,1,0,32,0]},{"dAddrMap":[["Nothing",[[0,42],[]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(0,False),(1,True)]))])",[[42,12],[0.21428573,0.78571427]]],["Just (Address (SubFace 2 (fromList [])) [AOnCylinder (SubFace 2 (fromList [(1,True)]))])",[[54,96],[0.5,0.78571427]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList []))])",[[150,96],[0.5,0.5]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList [(0,False)]))])",[[246,12],[0.3,0.5]]],["Just (Address (SubFace 2 (fromList [])) [AOnBottom (SubFace 2 (fromList [(1,True)]))])",[[258,12],[0.5,0.7]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnCylinder (SubFace 1 (fromList [(0,True)]))])",[[270,36],[0,0.78571427]]],["Just (Address (SubFace 2 (fromList [(0,False)])) [AOnBottom (SubFace 1 (fromList []))])",[[306,36],[0,0.5]]]],"dDrawCommands":"webgl.disable(webgl.BLEND);\nwebgl.clearDepth(1);\nwebgl.depthFunc(webgl.LEQUAL)\nwebgl.uniform4fv(uLoc[\"euler\"], [72.0,0.0,-36.0,0.5]);\nwebgl.uniform2fv(uLoc[\"screen\"], [w , h]);\nwebgl.uniform1fv(uLoc[\"shade\"], [0]);\nwebgl.uniform1fv(uLoc[\"scaleG\"], [1]);\nwebgl.uniform2fv(uLoc[\"screenDelta\"], [0.0,0.0]);\nwebgl.uniform1fv(uLoc[\"VisF\"], [1]);\n","dElemNum":0,"dInitCommands":"var arrId = webgl.getAttribLocation(program, \"vPosition\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,0)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Normal\");\nwebgl.vertexAttribPointer(arrId, 3, webgl.FLOAT, false ,56,16)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Color\");\nwebgl.vertexAttribPointer(arrId, 4, webgl.FLOAT, false ,56,28)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"Mode\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,44)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"VisFlagF\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,48)\nwebgl.enableVertexAttribArray(arrId);\nvar arrId = webgl.getAttribLocation(program, \"ObjGroup\");\nwebgl.vertexAttribPointer(arrId, 1, webgl.FLOAT, false ,56,52)\nwebgl.enableVertexAttribArray(arrId);\n","dLineWidth":2,"dPrimitiveMode":"Points","dStartIndex":0,"dvertexData":[]}]}};