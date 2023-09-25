import style from '../style/StoryImage.module.scss'
export default function StoryImage({image}){
    // console.log(image)
    return(
        <div className={''}>
            <img className={''} src={image.url}
                height={image.props.height} width={image.props.width} />
        </div>
    )
}