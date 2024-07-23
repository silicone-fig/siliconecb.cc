<script>
    import { T, useTask } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
  
    interactivity()
    const scale = spring(1)
    let rotation = 0
    useTask((delta) => {
      rotation += delta
    })
  </script>
  
  <T.PerspectiveCamera
    makeDefault
    position={[10, 10, 10]}
    on:create={({ ref }) => {
      ref.lookAt(0, 1, 0)
    }}
  />
  
  <T.DirectionalLight position={[0, 10, 10]} />
  
  <T.Mesh
    rotation.y={rotation}
    position.y={1}
    scale={$scale}
  >
    <T.BoxGeometry args={[1.3, .7, 1.3]} />
    <T.MeshStandardMaterial color="white" />
  </T.Mesh>
  